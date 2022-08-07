from requests import get
from re import search, sub

"""
Takes a list of authors and returns them as a string.
"""
def process_authors(authors):
    if not authors:
        return None
    return ", ".join(authors)

"""
Returns the first four digits from a date.
If the date is incorrectly formatted, it returns the full date.
"""
def get_year(date):
    if date:
        result = search('^\d{4}', date)
        if result:
            return result.group()
        return date
    return None

"""
Upgrades unsecure http:// links to https://
"""
def upgrade_http(url):
    if url:
        return sub("^http:\/\/", "https://", url)
    return None

"""
Takes in the nested industry_identifiers.
Returns the isbn_10 and isbn_13 in a flattened format.
"""
def get_isbns(industry_identifiers):
    isbn_10 = None
    isbn_13 = None
    if industry_identifiers:
        for item in industry_identifiers:
            if item.get('type') == "ISBN_10":
                isbn_10 = item.get('identifier')
            elif item.get('type') == "ISBN_13":
                isbn_13 = item.get('identifier')
    return {"isbn_10": isbn_10, "isbn_13": isbn_13}

"""
Returns the first category in a list.
"""
def get_category(categories):
    if not categories:
        return None
    return categories[0]

"""
Takes in a data dictionary and a list of nested keys.
Returns the nested key if it exists, otherwise it returns None.
"""
def get_key_if_exists(data, keys):
    for key in keys:
        try:
            data = data.get(key)
        except AttributeError as e:
            return None
    return data
    

"""
Returns book details from https://www.googleapis.com/books/v1/volumes/google_book_id
"""
def get_book_details(book_id):
    endpoint = "https://www.googleapis.com/books/v1/volumes/"
    api_key = "AIzaSyBVRBa3xpBCDhsZkdTrVhwwKrrHcDUglq4"
    r = get(f"{endpoint}{book_id}?key={api_key}")
    data = r.json()
    
    # Call individual validation functions.
    title = get_key_if_exists(data, ['volumeInfo', 'title'])
    authors = process_authors(get_key_if_exists(data, ['volumeInfo', 'authors']))
    isbns = get_isbns(get_key_if_exists(data, ['volumeInfo', 'industryIdentifiers']))
    year = get_year(get_key_if_exists(data, ['volumeInfo', 'publishedDate']))
    thumbnail = upgrade_http(get_key_if_exists(data, ['volumeInfo', 'imageLinks', 'thumbnail']))
    google_books_id = get_key_if_exists(data, ['id'])
    publisher = get_key_if_exists(data, ['volumeInfo', 'publisher'])
    category = get_category(get_key_if_exists(data, ['volumeInfo', 'categories']))
    description = get_key_if_exists(data, ['volumeInfo', 'description'])

    # Populate json to be returned.
    processed_json = {
    "result": {
        "title": title,
        "authors": authors,
        "year": year,
        "thumbnail": thumbnail,
        "isbn_10": isbns.get('isbn_10'),
        "isbn_13": isbns.get('isbn_13'),
        "google_books_id": google_books_id,
        "publisher": publisher,
        "category": category,
        "description": description
    }
    }

    return processed_json

"""
Returns search results from https://www.googleapis.com/books/v1/volumes/?q=search_term
"""
def get_books(search_term):
    endpoint = "https://www.googleapis.com/books/v1/volumes?q="
    api_key = "AIzaSyBVRBa3xpBCDhsZkdTrVhwwKrrHcDUglq4"
    r = get(f"{endpoint}{search_term}&key={api_key}")
    search_data = r.json()
    json_results = {"results": []}
    
    for data in search_data.get('items'):
        # Call individual validation functions.
        title = get_key_if_exists(data, ['volumeInfo', 'title'])
        authors = process_authors(get_key_if_exists(data, ['volumeInfo', 'authors']))
        isbns = get_isbns(get_key_if_exists(data, ['volumeInfo', 'industryIdentifiers']))
        year = get_year(get_key_if_exists(data, ['volumeInfo', 'publishedDate']))
        small_thumbnail = upgrade_http(get_key_if_exists(data, ['volumeInfo', 'imageLinks', 'thumbnail']))
        google_books_id = get_key_if_exists(data, ['id'])

        processed_json = {
            "title": title,
            "authors": authors,
            "year": year,
            "small_thumbnail": small_thumbnail,
            "isbn_10": isbns.get('isbn_10'),
            "isbn_13": isbns.get('isbn_13'),
            "google_books_id": google_books_id,
        }

        json_results.get('results').append(processed_json)

    return json_results
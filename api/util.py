from requests import get

# Takes a list of authors and returns them as a string.
def process_authors(authors):
    if not authors:
        return None
    return ", ".join(authors)

# Returns the first four digits from a date.
def get_year(date):
    if date:
        return date[0:4]
    return None

# Upgrades unsecure http:// links to https://
def upgrade_http(url):
    return url.replace("http://", "https://", 1)

# Returns the isbn_10 and isbn_13.
def get_isbns(industry_identifiers):
    isbn_10 = None
    isbn_13 = None
    for item in industry_identifiers:
        if item.get('type') == "ISBN_10":
            isbn_10 = item.get('identifier')
        elif item.get('type') == "ISBN_13":
            isbn_13 = item.get('identifier')
    return {"isbn_10": isbn_10, "isbn_13": isbn_13}

# Returns the first category in a list.
def get_category(categories):
    if not categories:
        return None
    return categories[0]

# Returns book details from https://www.googleapis.com/books/v1/volumes/google_book_id
def get_book_details(book_id):
    endpoint = "https://www.googleapis.com/books/v1/volumes/"
    api_key = "AIzaSyBVRBa3xpBCDhsZkdTrVhwwKrrHcDUglq4"
    r = get(f"{endpoint}{book_id}?key={api_key}")
    data = r.json()
    
    isbns = get_isbns(data.get('volumeInfo').get('industryIdentifiers'))

    processed_json = {
    "result": {
        "title": data.get('volumeInfo').get('title'),
        "authors": process_authors(data.get('volumeInfo').get('authors')),
        "year": get_year(data.get('volumeInfo').get('publishedDate')),
        "thumbnail": upgrade_http(data.get('volumeInfo').get('imageLinks').get('thumbnail')),
        "isbn_10": isbns.get('isbn_10'),
        "isbn_13": isbns.get('isbn_13'),
        "google_books_id": data.get('id'),
        "publisher": data.get('volumeInfo').get('publisher'),
        "category": get_category(data.get('volumeInfo').get('categories')),
        "description": data.get('volumeInfo').get('description')
    }
    }

    return processed_json

# Returns search results from https://www.googleapis.com/books/v1/volumes/?q=search_term
def get_books(search_term):
    endpoint = "https://www.googleapis.com/books/v1/volumes?q="
    api_key = "AIzaSyBVRBa3xpBCDhsZkdTrVhwwKrrHcDUglq4"
    r = get(f"{endpoint}{search_term}&key={api_key}")
    search_data = r.json()
    json_results = {"results": []}
    
    for data in search_data.get('items'):
        isbns = get_isbns(data.get('volumeInfo').get('industryIdentifiers'))

        processed_json = {
            "title": data.get('volumeInfo').get('title'),
            "authors": process_authors(data.get('volumeInfo').get('authors')),
            "year": get_year(data.get('volumeInfo').get('publishedDate')),
            "small_thumbnail": upgrade_http(data.get('volumeInfo').get('imageLinks').get('smallThumbnail')),
            "isbn_10": isbns.get('isbn_10'),
            "isbn_13": isbns.get('isbn_13'),
            "google_books_id": data.get('id'),
        }

        json_results.get('results').append(processed_json)

    return json_results
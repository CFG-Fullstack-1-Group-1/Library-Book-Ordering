import json

valid_data = """
{
        "borrower": {
            "id": "1927483950",
            "name": "Joe Bloggs"
        },
        "book": {

            "title": "Wuthering Heights",
            "authors": "Emily Bronte",
            "year": 1970,
            "publisher": "Penguin Classics",
            "category": "Classic",
            "isbn_10": "ISBN343456",
            "isbn_13": "ISBN343456789",
            "google_books_id": "FakeID23"
        },
        "status": "Pending"

}
"""

obj = json.loads(valid_data)
print(obj.get('book'))

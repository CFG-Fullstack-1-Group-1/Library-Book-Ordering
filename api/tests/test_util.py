from unittest.mock import patch, MagicMock
import unittest
from api.util import process_authors, get_year, upgrade_http, get_isbns, get_category, get_book_details, get_books
from api.api_test_data import book_details_test_data_full, book_details_test_data_full_processed, book_details_test_data_empty, book_details_test_data_empty_processed, book_search_test_data_full, book_search_test_data_full_processed, book_search_test_data_empty, book_search_test_data_empty_processed

class TestProcessAuthors(unittest.TestCase):
    def test_none_authors(self):
        """Test that a None value for authors returns None"""
        expected = None
        result = process_authors(None)
        self.assertEqual(expected, result)

    def test_empty_list(self):
        """Test that an empty list returns None"""
        expected = None
        result = process_authors([])
        self.assertEqual(expected, result)

    def test_one_author(self):
        """Test that a list with one author is formatted correctly"""
        expected = "Dr. Seuss"
        result = process_authors(["Dr. Seuss"])
        self.assertEqual(expected, result)

    def test_multiple_authors(self):
        """Test that a list with multiple authors is formatted correctly"""
        expected = "Dr. Seuss, Ann Other"
        result = process_authors(["Dr. Seuss", "Ann Other"])
        self.assertEqual(expected, result)

class TestGetYear(unittest.TestCase):
    def test_none_date(self):
        """Test that a None value for date returns None"""
        expected = None
        result = get_year(None)
        self.assertEqual(expected, result)

    def test_empty_date(self):
        """Test that an empty date returns None"""
        expected = None
        result = get_year("")
        self.assertEqual(expected, result)

    def test_correctly_formatted_date(self):
        """Test that a correctly formatted date returns the year"""
        expected = "2016"
        result = get_year("2016-09-01")
        self.assertEqual(expected, result)

    def test_incorrectly_formatted_date(self):
        """Test that an incorrectly formatted date returns the full date"""
        expected = "92-09-01"
        result = get_year("92-09-01")
        self.assertEqual(expected, result)

class TestUpgradeHttp(unittest.TestCase):
    def test_none_url(self):
        """Test that a None value for url returns None"""
        expected = None
        result = upgrade_http(None)
        self.assertEqual(expected, result)

    def test_empty_url(self):
        """Test that an empty url returns None"""
        expected = None
        result = upgrade_http("")
        self.assertEqual(expected, result)

    def test_http(self):
        """Test that http:// is replaced with https://"""
        expected = "https://books.google.com/books/content?id=pi0WDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        result = upgrade_http("http://books.google.com/books/content?id=pi0WDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api")
        self.assertEqual(expected, result)

    def test_http_appears_twice(self):
        """Test that only http:// at the beginning is replaced with https://"""
        expected = "https://books.google.com/books/content?id=pi0WDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api_http://"
        result = upgrade_http("http://books.google.com/books/content?id=pi0WDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api_http://")
        self.assertEqual(expected, result)

    def test_https(self):
        """Test that https:// isn't changed"""
        expected = "https://books.google.com/books/content?id=pi0WDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        result = upgrade_http("https://books.google.com/books/content?id=pi0WDAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api")
        self.assertEqual(expected, result)

class TestGetIsbns(unittest.TestCase):
    def test_none_industry_identifiers(self):
        """Test that an empty industry_identifiers returns None values for isbns"""
        expected = {"isbn_10": None, "isbn_13": None}
        result = get_isbns(None)
        self.assertEqual(expected, result)

    def test_empty_industry_identifiers(self):
        """Test that an empty industry_identifiers returns None values for isbns"""
        expected = {"isbn_10": None, "isbn_13": None}
        result = get_isbns([])
        self.assertEqual(expected, result)

    def test_empty_isbns(self):
        """Test that empty isbns returns None values for isbns"""
        expected = {"isbn_10": None, "isbn_13": None}
        industry_identifiers = [
          {
            "type": "ISBN_10",
            "identifier": None
          },
          {
            "type": "ISBN_13",
            "identifier": None
          }
        ]
        result = get_isbns(industry_identifiers)
        self.assertEqual(expected, result)

    def test_isbns(self):
        """Test that isbns are returned"""
        expected = {"isbn_10": "000820151X", "isbn_13": "9780008201517"}
        industry_identifiers = [
          {
            "type": "ISBN_10",
            "identifier": "000820151X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780008201517"
          }
        ]
        result = get_isbns(industry_identifiers)
        self.assertEqual(expected, result)

class TestGetCategory(unittest.TestCase):
    def test_none_categories(self):
        """Test that a None value for categories returns None"""
        expected = None
        result = get_category(None)
        self.assertEqual(expected, result)

    def test_empty_categories(self):
        """Test that an empty list returns None"""
        expected = None
        result = get_category([])
        self.assertEqual(expected, result)

    def test_one_category(self):
        """Test that a list with one category returns the first category"""
        expected = "Juvenile Fiction"
        result = get_category(["Juvenile Fiction"])
        self.assertEqual(expected, result)

    def test_multiple_categories(self):
        """Test that a list with multiple categories returns the first category"""
        expected = "Juvenile Fiction"
        result = get_category(["Juvenile Fiction", "Cat in the Hat (Fictitious character)"])
        self.assertEqual(expected, result)

class TestGetBookDetails(unittest.TestCase):
    @patch("api.util.get")
    def test_missing_data(self, mock_requests):
        """Test that missing data is returned as None"""
        self.maxDiff = None
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {}
        mock_requests.return_value = mock_response

        self.assertDictEqual(get_book_details("fake_id"), book_details_test_data_empty_processed)

    @patch("api.util.get")
    def test_empty_data(self, mock_requests):
        """Test that empty data is returned as None"""
        self.maxDiff = None
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = book_details_test_data_empty
        mock_requests.return_value = mock_response

        self.assertDictEqual(get_book_details("fake_id"), book_details_test_data_empty_processed)

    @patch("api.util.get")
    def test_full_data(self, mock_requests):
        """Test that full data is processed correctly"""
        self.maxDiff = None
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = book_details_test_data_full
        mock_requests.return_value = mock_response

        self.assertDictEqual(get_book_details("fake_id"), book_details_test_data_full_processed)

class TestGetBooks(unittest.TestCase):
    @patch("api.util.get")
    def test_missing_data(self, mock_requests):
        """Test that missing data is returned as None"""
        self.maxDiff = None
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {"items": []}
        mock_requests.return_value = mock_response
        expected = {"results": []}

        self.assertDictEqual(get_books("cats"), expected)

    @patch("api.util.get")
    def test_empty_data(self, mock_requests):
        """Test that empty data is returned as None"""
        self.maxDiff = None
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = book_search_test_data_empty
        mock_requests.return_value = mock_response

        self.assertDictEqual(get_books("cats"), book_search_test_data_empty_processed)

    @patch("api.util.get")
    def test_full_data(self, mock_requests):
        """Test that full data is processed correctly"""
        self.maxDiff = None
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = book_search_test_data_full
        mock_requests.return_value = mock_response

        self.assertDictEqual(get_books("cats"), book_search_test_data_full_processed)

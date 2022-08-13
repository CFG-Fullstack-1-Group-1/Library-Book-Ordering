# Library Book Ordering Application

To find out about this project and the members behind it, please watch over at: https://www.youtube.com/watch?v=bpE9dG1jXHk

## To get the project running

### Activate virtual environment
Make sure virtualenv is installed:
```
pip install virtualenv
```

Create virtual environment (if you don't have a `venv` folder):
```
python -m venv ./venv
```

Run virtual environment:
```
cd library-book-ordering
source venv/bin/activate
```
Run virtual environment in Windows 10 
(if the above doesn't work):
```
py -m venv env
.\env\Scripts\activate
```

If that doesn't work try:
```
.\venv\Scripts\activate
```

**Note:** `(venv)` should be at the start of each line in the terminal.

### Install dependencies
In terminal with virtual environment (venv) running:
```
cd library-book-ordering
pip install -r requirements.txt
cd library-book-ordering/frontend
npm install
```

### Run the dev server
In terminal with virtual environment running:
```
cd library-book-ordering
python manage.py runserver
```
**Note:** this runs the Django server (and will run the front-end stuff).

In a second terminal:
```
cd library-book-ordering/frontend
npm run dev
```
**Note:** this watches for changes to the React folders and recompiles the bundled JavaScript file (Webpack/Babel).

### Accessing the development server
In the virtual environment terminal, there should be the following:
```
Month DD, YYYY - HH:MM:SS
Django version X.X.X, using settings 'library_book_ordering.settings'
Starting development server at **http://127.0.0.1:8000/**
...
```
You should either click or copy and paste the above highlighted link.
Afterwards, you will be met wit a login screen to which the superuser details are shown below.

## Development Info

### To update the database after table changes in models.py
```
cd library-book-ordering
python manage.py makemigrations
python manage.py migrate
```

### To run Django tests
```
python manage.py test
```

### Superuser
- Username: user
- Email: user@email.com
- Password: pass

## Folder Structure
### [API](./api/)
The internal API. Connects to the database and requests data from Google Books. Hosted at http://127.0.0.1:8000/api/

- [admin.py](./api/admin.py) -> admin view settings
- [models.py](./api/models.py) -> database settings
- [serializers.py](./api/serializers.py) -> api json settings
- [tests](./api/tests) -> Python unit tests
- [urls.py](./api/urls.py) -> api endpoints
- [views.py](./api/views.py) -> api server logic

### [Frontend](./frontend/)
The frontend UI hosted at http://127.0.0.1:8000/
- [src](./frontend/src/) -> React source folder
    - [components](./frontend/src/components/) -> React components (almost everything goes here!)
    - [index.js](./frontend/src/index.js) -> React entry point (this shouldn't be changed)
- [static](./frontend/src/static/) -> frontend static files
    - [css](./frontend/src/static/css) -> css files (to override Bootstrap)
    - [frontend](./frontend/src/static/frontend) -> bundled JavaScript file (this shouldn't be changed)
    - [images](./frontend/src/static/images) -> static images for frontend
- [templates](./frontend/templates/frontend/) -> frontend html templates
- [babel.config.json](./frontend/babel.config.json) -> babel settings (JavaScript transpiler)
- [package.json](./frontend/package.json) -> npm settings (Node modules and scripts)
- [tests.py](./frontend/tests.py) -> Python unit tests
- [urls.py](./frontend/urls.py) -> frontend endpoints
- [views.py](./frontend/views.py) -> frontend server logic
- [webpack.config.js](./frontend/webpack.config.js) -> webpack settings (JavaScript bundler)


### [Django Project Settings](./library_book_ordering/)
- [settings.py](./library_book_ordering/settings.py) -> main project settings
- [urls.py](./library_book_ordering/urls.py) -> main project urls (these shouldn't be changed)

### Other files
- db.sqlite3 -> this shouldn't need to be changed directly (see [models.py](./api/models.py))
- manage.py -> Django manager (used to access Django commands)
- [requirements.txt](./requirements.txt) -> Python required packages file
- venv -> virtual environment folder

## Troubleshooting
- Issues with downloading and running the Python Environment on Windows [click here](https://stackoverflow.com/questions/54312543/activate-venv-python-3-7-2-for-windows)
- Issues with the webpack configurations and DefinePlugin values [click here](https://stackoverflow.com/questions/66772358/webpack-warning-warning-in-defineplugin-conflicting-values-for-process-env-no)
- CSS Files causing an error with webpack [click here]( https://stackoverflow.com/questions/55652077/css-file-causing-error-in-react-webpack-configuration)

from django.urls import path, re_path
from .views import index, login_view, logout_view, not_found_view

urlpatterns = [
    path('', index, name="index"),
    path('login/', login_view, name="login"),
    path('logout/', logout_view, name="logout"),
    # Catch-all for erroneous paths redirecting from root path to index view:
    re_path(r'^$', not_found_view, name ="not_found"),
    # Catch-all for erroneous paths redirecting from root subpaths to index view:
    re_path(r'^(?:.*)/?$', not_found_view, name="not_found"), 
]
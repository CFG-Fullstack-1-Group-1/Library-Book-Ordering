export default function validateSearchInfo(values) {
    let errors = {};

    // This will tell the user that they need to input the below key values to search properly (Title, Author, Year)
    // Title
    if(!values.title.trim()) {
        errors.title = '*Title of Book required';
    }

    // Author
    if(!values.author.trim()) {
        errors.author = '*Author of Book required';
    }

    // Year
    if(!values.year.trim()) {
        errors.year = "*Year of Book Published required";
    } else if (values.year.length !== 4) {
        errors.year = '*Please input a valid Year';
    }

    // //  Valid ISBN10
    // if (values.ISBN10.length > 10) {
    //     errors.ISBN10 = 'Please inpit a valid ISBN10 that is 10 numbers long';
    // }

    // // Valid ISBN13
    // if (values.ISBN13.length > 13) {
    //     errors.ISBN13 = 'Please inpit a valid ISBN13 that is 13 numbers long';
    // }

    return errors;
}
# Dropdown component  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Notes
CSS is through TailwindCSS. 
- A user should be able to open and close the dropdown menu.
    - By clicking outside the dropdown menu, user can close the dropdown menu
- The component must support a single selected option or multiple selected options. 
- A user should be able to select and deselect all options at once.
- The selected option or options are visible when the dropdown is closed.


### The Component
    The componenet takes in various props:
        | Props | Meaning|
        | ----- | ------ |
        | dropdownName | a `String` that is displayed as the name of the menu on the button |
        | data | JSON data |
        | multiSelect | a `Boolean` variable to indicate if the dropdown supports multiple selections |
        | required | a `Boolean` variable to indicate if selection is required |
        | labelField | a `String` to indicate the data field for display |
        | valueField | a `String` to indicate the data field that is registered as value. |
    

- Data
    For demo purpose, the data shown in the dropdown menu is stored locally under /assets.
        - persons.json
        - countries.json
    
    We can also create a quick async await function wrapped in useEffect() to fetch dropdown items from an API. 
- Performance
    For incredibly large list, we can implement a lazy loading, like an infinite scroll. It can be argued that dropdown menus are not great for large list in terms of good UX practices. 
        - A search and text matching may be better

    Some potential improvements:
    - Manual Entry for nonexistent options
    
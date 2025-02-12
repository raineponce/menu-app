import MenuItem from "../MenuItem"
// import Menu from "../Menu"

const MenuApp = ({ data }) => {
    // let menuItem = {
    //     "itemId": 1,
    //     "itemPrice": "11",
    //     "itemName": "Lasagne",
    //     "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions."
    // }

    let allItems = data;
    let dinnerItems = allItems[0].menuItems[0];


    return (
        <div className="App">
            {/* <Menu /> */}
            {/* <MenuItem items={menuItem}></MenuItem> */}
            {/* <Menu menuName={dinnerItems.menuName} menuItems={dinnerItems.menuItems}></Menu> */}
            <MenuItem items={dinnerItems}></MenuItem>

        </div>
    )
}

export default MenuApp
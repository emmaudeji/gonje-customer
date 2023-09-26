
export default function Menu() {
    return (
        <>
            <div className="aside  flex-column vh-100 flex-shrink-0 text-white" > <a href="/" className="d-flex align-items-center mx-auto mb-3 mb-md-0  text-white text-decoration-none"> <img className="p-3 img-fluid logo" src="/assets/images/logo.png" alt="logo" /> </a>
                <hr className="mt-2" />
                <ul className="nav nav-pills flex-column mb-auto">
                    <a href="javascript:void(0)" className="closebtn">&times;</a>
                    <li className="nav-item"> <a href="#" className="d-flex nav-link active" aria-current="page"> <div className="icon"><img src="/assets/images/home-icon.svg" alt="" /></div><span className="ms-2">Home / shops</span> </a> </li>
                    <hr className="side-menu-divider" />
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/shop.svg" alt="" /></div><span className="ms-2">My Pantry</span> </a> </li>
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/shopping-basket.svg" alt="" /></div><span className="ms-2">Grocery</span> </a> </li>
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/fridge.svg" alt="" /></div><span className="ms-2">Fridge</span> </a> </li>
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/kitchen-book.svg" alt="" /></div><span className="ms-2">My Recipes</span> </a> </li>
                    <hr className="side-menu-divider" />
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/offers.svg" alt="" /></div><span className="ms-2">Top Deals</span> </a> </li>
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/new-items.svg" alt="" /></div><span className="ms-2">What's New!</span> </a> </li>
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/sale(1).svg" alt="" /></div><span className="ms-2">Today Sale</span> </a> </li>
                    <hr className="side-menu-divider" />
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/gift-box.svg" alt="" /></div><span className="ms-2">Gift Card</span> </a> </li>
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/transfer.svg" alt="" /></div><span className="ms-2">Refferals</span> </a> </li>
                    <li> <a href="#" className="d-flex nav-link text-whitee"> <div className="icon text-center"><img src="/assets/images/project-launch.svg" alt="" /></div><span className="ms-2">Go Club</span> </a> </li>
                </ul>
            </div>
        </>
    )
}
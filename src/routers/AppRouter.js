import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'

const Nav = () => (
    <nav>
        <NavLink exact to="/" activeClassName='active'>Anasayfa</NavLink>
        <NavLink to="/about" activeClassName='active'>Hakkımızda</NavLink>
        <NavLink to="/contact" activeClassName='active'>İletişim</NavLink>
        <NavLink exact to="/products" activeClassName='active'>Ürünler</NavLink>
        <NavLink to="/products/:id" activeClassName='active'>Ürün Detay</NavLink>
    </nav>
)

const HomePage = () => ( <div>Home Page</div> )
const AboutPage = () => ( <div>About Page</div> )
const ContactPage = () => ( <div>Contact Page</div> )
const ProductsPage = () => ( <div>Products Page</div> )
const ProductDetailPage = (props) => {
    return (
        <div>Product Detail Page - { props.match.params.id }</div>
    )
}
const NotFound = () => ( <div>Not Found</div> )

const AppRouter = () => (
    <BrowserRouter>
        <Nav />
        <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/contact" component={ ContactPage } />
            <Route exact path="/products" component={ ProductsPage } />
            <Route path="/products/:id" component={ ProductDetailPage } />
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
)

export default AppRouter
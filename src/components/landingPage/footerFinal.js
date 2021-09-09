import * as React from "react"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/logo-light.svg'


export default function FooterFinal() {
    return (
        <Navbar className="font-karla bg-navy_400" variant="light">
        <Container className="flex-wrap items-center">
            <Navbar.Brand href="/">
                <img
                    src= {Logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top mr-5"
                    alt="triiyo logo"
                />
            </Navbar.Brand>
           
            <Nav className="justify-content-center">
                <Nav.Link href="/why-triiyo" className="whitespace-nowrap font-karla font-medium text-white">Contact</Nav.Link>
                <Nav.Link href="/resources" className="whitespace-nowrap font-karla font-medium text-white">Support</Nav.Link>
                <Nav.Link href="/resources" className="whitespace-nowrap font-karla font-medium text-white">Privacy Policy</Nav.Link>
                <Nav.Link href="/resources" className="whitespace-nowrap font-karla font-medium text-white">Terms of service</Nav.Link>
                <Nav.Link href="/resources" className="whitespace-nowrap font-karla font-medium text-white"> | </Nav.Link>
                <Nav.Link href="/resources" className="whitespace-nowrap font-karla font-medium text-white">triiyo 2021. All rights reserved.</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/book-demo" className="whitespace-nowrap md:inline-flex text-center items-center justify-center px-2 py-2 text-base font-bold text-white hover:bg-navy_300">
                    <svg width="13" height="24" viewBox="0 0 13 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.0847 13.5L12.7513 9.15656H8.58363V6.33797C8.58363 5.14969 9.16581 3.99141 11.0324 3.99141H12.9271V0.293438C12.9271 0.293438 11.2077 0 9.56378 0C6.13159 0 3.88816 2.08031 3.88816 5.84625V9.15656H0.072998V13.5H3.88816V24H8.58363V13.5H12.0847Z"
                            fill="white" />
                    </svg>
                </Nav.Link>
                <Nav.Link href="/book-demo" className="whitespace-nowrap md:inline-flex text-center items-center justify-center px-2 py-2 text-base font-bold text-white hover:bg-navy_300">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.838 5.60928C7.85679 5.60928 5.4521 8.01396 5.4521 10.9952C5.4521 13.9765 7.85679 16.3812 10.838 16.3812C13.8193 16.3812 16.224 13.9765 16.224 10.9952C16.224 8.01396 13.8193 5.60928 10.838 5.60928ZM10.838 14.4968C8.91147 14.4968 7.33647 12.9265 7.33647 10.9952C7.33647 9.06396 8.90679 7.49365 10.838 7.49365C12.7693 7.49365 14.3396 9.06396 14.3396 10.9952C14.3396 12.9265 12.7646 14.4968 10.838 14.4968ZM17.7005 5.38896C17.7005 6.0874 17.138 6.64521 16.4443 6.64521C15.7458 6.64521 15.188 6.08271 15.188 5.38896C15.188 4.69521 15.7505 4.13271 16.4443 4.13271C17.138 4.13271 17.7005 4.69521 17.7005 5.38896ZM21.2677 6.66396C21.188 4.98115 20.8037 3.49053 19.5708 2.2624C18.3427 1.03428 16.8521 0.649902 15.1693 0.565527C13.4349 0.46709 8.23647 0.46709 6.5021 0.565527C4.82397 0.645215 3.33335 1.02959 2.10054 2.25771C0.867725 3.48584 0.488037 4.97646 0.403662 6.65928C0.305225 8.39365 0.305225 13.5921 0.403662 15.3265C0.48335 17.0093 0.867725 18.4999 2.10054 19.728C3.33335 20.9562 4.81929 21.3405 6.5021 21.4249C8.23647 21.5233 13.4349 21.5233 15.1693 21.4249C16.8521 21.3452 18.3427 20.9608 19.5708 19.728C20.799 18.4999 21.1833 17.0093 21.2677 15.3265C21.3662 13.5921 21.3662 8.39834 21.2677 6.66396ZM19.0271 17.1874C18.6615 18.1061 17.9537 18.814 17.0302 19.1843C15.6474 19.7327 12.3662 19.6061 10.838 19.6061C9.30991 19.6061 6.02397 19.728 4.64585 19.1843C3.7271 18.8187 3.01929 18.1108 2.64897 17.1874C2.10054 15.8046 2.2271 12.5233 2.2271 10.9952C2.2271 9.46709 2.10522 6.18115 2.64897 4.80303C3.0146 3.88428 3.72241 3.17646 4.64585 2.80615C6.02866 2.25771 9.30991 2.38428 10.838 2.38428C12.3662 2.38428 15.6521 2.2624 17.0302 2.80615C17.949 3.17178 18.6568 3.87959 19.0271 4.80303C19.5755 6.18584 19.449 9.46709 19.449 10.9952C19.449 12.5233 19.5755 15.8093 19.0271 17.1874Z"
                            fill="white" />
                    </svg>  
                </Nav.Link>
                <Nav.Link href="/book-demo" className="whitespace-nowrap md:inline-flex text-center items-center justify-center px-2 py-2 text-base font-bold text-white hover:bg-navy_300">
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.40706 21H0.707779V6.97971H5.40706V21ZM3.05489 5.06721C1.55221 5.06721 0.333374 3.91408 0.333374 2.52189C0.333374 1.85318 0.620105 1.21185 1.13049 0.738991C1.64087 0.266136 2.3331 0.000488281 3.05489 0.000488281C3.77668 0.000488281 4.46891 0.266136 4.9793 0.738991C5.48968 1.21185 5.77641 1.85318 5.77641 2.52189C5.77641 3.91408 4.55706 5.06721 3.05489 5.06721ZM22.995 21H18.3058V14.175C18.3058 12.5485 18.2704 10.4625 15.8626 10.4625C13.4193 10.4625 13.0449 12.2297 13.0449 14.0578V21H8.3507V6.97971H12.8577V8.89221H12.9235C13.5509 7.79064 15.0834 6.62814 17.3698 6.62814C22.1258 6.62814 23 9.52971 23 13.2985V21H22.995Z"
                            fill="white" />
                    </svg>
                </Nav.Link>
                <Nav.Link href="/book-demo" className="whitespace-nowrap md:inline-flex text-center items-center justify-center px-2 py-2 text-base font-bold text-white hover:bg-navy_300">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.533 5.11175C21.5482 5.32494 21.5482 5.53817 21.5482 5.75136C21.5482 12.2539 16.599 19.7463 7.5533 19.7463C4.76648 19.7463 2.17767 18.9391 0 17.5382C0.395953 17.5838 0.776625 17.5991 1.18781 17.5991C3.48727 17.5991 5.60405 16.8224 7.29441 15.4976C5.13197 15.4519 3.31978 14.0356 2.69541 12.0864C3 12.132 3.30455 12.1625 3.62437 12.1625C4.06598 12.1625 4.50764 12.1016 4.91878 11.995C2.66498 11.5381 0.974578 9.55845 0.974578 7.16759V7.1067C1.62937 7.47219 2.39086 7.70061 3.19791 7.73103C1.87303 6.84777 1.00505 5.34017 1.00505 3.63458C1.00505 2.72089 1.24866 1.88333 1.67508 1.15236C4.09641 4.13713 7.73602 6.08633 11.8172 6.29956C11.7411 5.93408 11.6954 5.55341 11.6954 5.17269C11.6954 2.462 13.8883 0.253906 16.6141 0.253906C18.0304 0.253906 19.3095 0.847813 20.208 1.8072C21.3197 1.59402 22.3857 1.18283 23.3299 0.619391C22.9643 1.76155 22.1877 2.72094 21.1674 3.33003C22.1573 3.22348 23.1167 2.94931 23.9999 2.56864C23.33 3.54322 22.4924 4.4112 21.533 5.11175Z"
                            fill="white" />
                    </svg>
                </Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    )
}
import { PropsWithChildren, ReactNode } from "react";

// My solution ↓↓↓
// type image = {
//     src: string,
//     alt: string
// }

// type HeaderProps = PropsWithChildren<{image:image}>
// const Header = ({image:{src,alt}, children}:HeaderProps) => {
//     return ( 
//         <header>
//             <img src={src} alt={alt} />
//             {children}
//         </header>
//     );
// }
// ↑↑↑

// Max's solution ↓↓↓
type HeaderProps = {
    image: {
        src: string,
        alt: string
    }
    children: ReactNode    
}
const Header = ({image, children}:HeaderProps) => {
    return ( 
        <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    );
}
// ↑↑↑
 
export default Header;
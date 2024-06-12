export default function TabButton(props) {
    // document.querySelector('button').addEventListener('click', () => {}) 
    // imperativ plane js function
    
    return (
        <li>
            <button className={props.isSelected ? 'active' : undefined} onClick={props.onClick}>{props.children}</button>
            {/* //children prop refers to the content between your component text */}
        </li>
    );
}
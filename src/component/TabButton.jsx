export default function TabButton({label, /*OnSelect,*/ IsSelected,...props}){
    return <li><button className={IsSelected ? 'active' : ''} /*onClick={OnSelect}*/ {...props}>{label}</button></li>;
}
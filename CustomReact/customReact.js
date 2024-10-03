
function customRender(rectEelement,container){
    const DomEelenment= document.createElement(rectEelement.type);
    DomEelenment.innerHTML=rectEelement.children;
    DomEelenment.setAttribute('href', rectEelement.props.href)
    DomEelenment.setAttribute('target',rectEelement.props.target)
container.appendChild(DomEelenment)

}




const rectEelement={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'Click me to open google'
}


const mainContainer=document.querySelector('#root')


customRender(rectEelement,mainContainer)
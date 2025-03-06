export default function Layout(props) {
    
    const {children} = props
    
    const header = (
        <header>
            <h1 className="text-gradient">The workout App</h1>
            <p><strong>the 30 simple workout program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://github.com/FPiatti98" target="_blank"></a>Franco Piatti</p>
        </footer>
    )



    return(
        <>
            {header}
            {children}
            {footer} 
        </>
    )
}
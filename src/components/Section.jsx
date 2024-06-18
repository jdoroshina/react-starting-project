export default function Section({ title, children, ...props}) {
    // this three dots thing is built into JavaScript and tells JavaScript to collect all other props that might be received on this section component and merge them into a props object.
    return (
    <section {...props}> 
    {/* we're using three dots to spread some data onto some other element. */}
        <h2>{title}</h2>
        {children}
    </section>
    );
}
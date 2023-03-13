const Tag = ({ children, ...props }) => {
    if (children) {
        return (
            <span className="rounded-3 p-2" style={{ border: "1px solid #48483A", color: "#48483A" }} {...props}>
                {children}
            </span>
        );
    }
    return <></>;
};

export default Tag;
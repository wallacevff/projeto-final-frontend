const PanelGroupButton = (props: any) =>
    <div style={{
        marginTop: "calc(100vh * 0.15)",
        display: "flex",
        width: "80vw",
        // flex: 1,
        justifyContent: "space-between"
    }}>
        {props.children}
    </div>

export default PanelGroupButton;
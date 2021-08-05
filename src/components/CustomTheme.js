export default {
    baseName: "FlexLight",
    colors: {
        lightTextColor: "#ffffff",
        darkTextColor: "#1c2762",
    },
    overrides: {
        MainHeader: {
            Container: {
                color: "#1c2762",
                background: "#ffffff",          
            },
            Button: {
                color: "#1c2762",
                background: "#ffffff", 
            }
        },
        SideNav: {
            Container: {
                background: "#ffcc01",
            },
            Button: {
                background: "#ffcc01",
                color: "#1c2762"
            },
            Icon: {
                color: "#1c2762"
            }
        },

        TaskCanvasHeader: {
            WrapupTaskButton: {
                background: "#ffcc01",
                color: "#1c2762",
            },
            EndTaskButton: {
                background: "#1c2762",
                color: "#ffffff",
            }
        },
        TaskList: {
            Container:{
                background: "#1c2762",
                color: "#ffffff"
            },
            Item: {
                SelectedContainer: {
                    background: "#1c2762",
                    color: "#ffffff"
                },
                Container: {
                    background: "#ffffff",
                    color: "#1c2762"
                },
                Icon: {
                    color: "#1c2762",
                    background: "#ffcc01",
                },
            },
        },
        NoTasksCanvas:{
            Container: {
                background: "#ffffff",
                color: "#000"
            },
            Hint: {
                color: "#000"
            },     
        },
        UserActivityControls: {
            Item: {
                background: "#ffffff",
                color: "#1c2762"
            },
            Items: {
                background: "#ffffff",
                color: "#1c2762"
            }
        },
    }
    
}
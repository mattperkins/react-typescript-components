import * as React from "react"

interface IMaxCompProps {
    name: string;
}

export default class MaxComp extends React.Component<IMaxCompProps, {}> {
    render() {
        return (
            <div>
                <p>Hello {this.props.name}</p>
            </div>
        )
    }
}
import React, { Component } from "react";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <ErrorScreen
                    message={this.state.error && this.state.error.toString()}
                />
            );
        }
        return this.props.children;
    }
}

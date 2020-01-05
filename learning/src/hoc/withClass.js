import React, { Component } from 'react'

const withClass = (WrappedComponent, class_) => {
    class Anony extends Component {

        render() {
            // const {forwardedRef, ...rest} = this.props;
                return(
                 <div className={class_}>
                    <WrappedComponent {...this.props} ref={this.props.Myref} />
                </div>
                )

        }

    }
    return React.forwardRef((props, ref) => {
        return (
                <Anony Myref={ref} {...props} />
            )
    }
    )
}
export default withClass;
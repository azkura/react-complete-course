import React from 'react'

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>  
        </div>
    )
}

export default withClass

// {...props} = props={props}  features spread operateur
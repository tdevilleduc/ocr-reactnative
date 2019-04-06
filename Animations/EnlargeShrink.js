import React from 'react'
import {Animated} from 'react-native'


class EnlargeShrink extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            width: new Animated.Value(40),
            height: new Animated.Value(40)
        }
    }

    componentDidUpdate() {
        Animated.parallel([
            Animated.spring(
                this.state.width,
                {
                    toValue: 80
                }
            ),
            Animated.spring(
                this.state.height,
                {
                    toValue: 80
                }
            )
        ]).start()
    }

    render() {
        return(
            <Animated.View 
                style={{width: this.state.width, height: this.state.height}}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default EnlargeShrink
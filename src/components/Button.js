import PropTypes from 'prop-types'

const Button = ({color,text, onClick}) =>{
    return (
        <button style={{backgroundColor:color}} onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'Blue',
    text: 'Przycisk'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button
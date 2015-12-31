export default class GameObject extends Component {}
GameObject.contextTypes = {
  physics: React.PropTypes.any.isRequired,
  stage: React.PropTypes.any.isRequired,
  keys: React.PropTypes.any.isRequired
}
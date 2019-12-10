import React,{Component} from "react"

export default class Register extends Component {

    handleClickEnd() {
        var request = new Request('http://localhost:3000/register', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                email: this.refs.email.value,
                username: this.refs.username.value,
                password: this.refs.password.value
            })
        });
        
        fetch(request)
            .then(function (response) {
                response.json()
                    .then(function (data) {
                        console.log(data)

                    })
            }).catch(function (err) {
            console.log(err)
        })
    }
    render(){
    return (
        <div>
            <form>
                <div class="form-row">
                    <div class="col">
                        <input ref="email" type="text" class="form-control" placeholder="email" />
                    </div>
                    <div class="col">
                        <input ref="username" type="text" class="form-control" placeholder="username" />
                    </div>
                    <div class="col">
                        <input ref="password" type="text" class="form-control" placeholder="password" />
                    </div>
                    <button type="button" class="btn btn-success" onClick={this.handleClickEnd.bind(this)}>Success</button>

                </div>
            </form>
        </div>
    )}
}
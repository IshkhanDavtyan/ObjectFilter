import React from 'react'

export default function Login() {
    return (
        <div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Eamail and password</span>
                </div>
                <input type="text" aria-label="First name" class="form-control" />
                <input type="text" aria-label="Last name" class="form-control" />
                <button type="button" class="btn btn-success">Success</button>
            </div>
        </div>
    )
}
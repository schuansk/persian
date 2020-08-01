import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null)
    const { fieldName, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <>
            <div className="input-section">
                <input 
                    ref={inputRef} 
                    type={rest.type}
                    required
                />

                <label className="label-input">
                    <span className="content-label">
                        { rest.label }
                    </span>
                </label>
            </div>

            { error && 
                <span className="error-message">
                    { error }
                </span> 
            }
        </>
    )
}
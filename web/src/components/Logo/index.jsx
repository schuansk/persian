import React from 'react' 

import './styles.css'

export default function Logo(props) {
    const { error } = props

    if(error) {
        angry()
    }

    function angry() {
        const lip = document.getElementById('bottom-lip')
        const leftEye = document.getElementById('left-eye')
        const rightEye = document.getElementById('right-eye')
        const leftEyebrow = document.getElementById('left-eyebrow')
        const rightEyebrow = document.getElementById('right-eyebrow')

        leftEye.classList.remove('default-eye')
        rightEye.classList.remove('default-eye')

        leftEyebrow.classList.remove('default-eyebrow')   
        rightEyebrow.classList.remove('default-eyebrow')

        leftEyebrow.classList.add('left-eyebrow')
        rightEyebrow.classList.add('right-eyebrow')

        lip.classList.add('bottom-lip')

        setTimeout(() => {
            leftEye.classList.add('default-eye')
            rightEye.classList.add('default-eye')

            leftEyebrow.classList.add('default-eyebrow')   
            rightEyebrow.classList.add('default-eyebrow')

            leftEyebrow.classList.remove('left-eyebrow')
            rightEyebrow.classList.remove('right-eyebrow')

            lip.classList.remove('bottom-lip')
        }, 1000)
    }

    return (
        <>
            <svg width="181" height="167" viewBox="0 0 415 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="persian-logo-v2">
                    <g id="head">
                        <g id="Group 1">
                            <path id="Vector 1" d="M32 213.078C28.6819 72.6701 153.667 40.0782 207.5 41.0782C321.5 50.5782 389.261 124.006 381 213.078C369.5 337.078 207.5 323.578 207.5 323.578C207.5 323.578 35.0594 342.542 32 213.078Z" fill="#F39C12"/>
                            <path id="Vector 2" d="M43.5 24.0782C33.5 58.8782 44.6667 104.912 51.5 123.578C91.6667 103.412 164 61.1782 132 53.5782C92 44.0782 56 -19.4218 43.5 24.0782Z" fill="#F39C12"/>
                        </g>
                        <g id="Group 2">
                            <path id="Vector 2_2" d="M365.447 24.1563C375.448 58.9563 364.281 104.99 357.447 123.656C317.281 103.49 244.947 61.2563 276.947 53.6563C316.947 44.1563 352.947 -19.3437 365.447 24.1563Z" fill="#F39C12"/>
                        </g>
                        <path id="Vector 4" d="M10.2376 276.078C0.155146 281.221 26.9043 244.912 35.7376 238.078L82.0131 300.774C82.1303 300.813 82.2065 300.912 82.2376 301.078L82.0131 300.774C79.7201 300.02 61.7299 322.564 58.7376 323.578C55.5924 324.644 62.7376 287.078 62.7376 287.078C55.303 289.673 37.6525 300.313 35.7376 304.578C33.8227 308.843 41.4042 273.578 46.7376 267.078C39.8061 271.124 20.32 270.936 10.2376 276.078Z" fill="#F39C12"/>
                        <path id="Vector 5" d="M400.002 271.29C410.085 276.462 383.335 239.95 374.501 233.078L328.224 296.124C328.107 296.163 328.031 296.263 328 296.43L328.224 296.124C330.518 295.366 348.508 318.036 351.501 319.056C354.646 320.128 347.501 282.352 347.501 282.352C354.935 284.961 372.587 295.661 374.501 299.95C376.416 304.238 368.835 268.776 363.501 262.24C370.433 266.308 389.92 266.119 400.002 271.29Z" fill="#F39C12"/>
                    </g>
                    <g id="snout">
                        <ellipse id="inside-mouth" cx="206" cy="311" rx="18" ry="12" fill="#FE6D6D"/>
                        <path id="bottom-lip" d="M205 325.978C189.282 325.978 176.833 307.7 174 300.712L205 307.162L236 300C230.5 310.572 220 325.978 205 325.978Z" fill="#F1C40F"/>
                        <ellipse id="Ellipse 4" cx="188.082" cy="289.405" rx="29.4846" ry="23.9028" transform="rotate(-16.5908 188.082 289.405)" fill="#F1C40F"/>
                        <ellipse id="Ellipse 5" cx="222.082" cy="289.404" rx="29.4846" ry="23.9028" transform="rotate(16.59 222.082 289.404)" fill="#F1C40F"/>
                    </g>
                    <ellipse className="default-eye" id="left-eye" cx="164.5" cy="232.5" rx="17.5" ry="30.5" fill="#6C63FF"/>
                    <ellipse className="default-eye" id="right-eye" cx="243.5" cy="232.5" rx="17.5" ry="30.5" fill="#6C63FF"/>
                    <path className="default-yebrow" id="left-eyebrow" d="M139.208 188.566L164.53 185.374L191.391 189.113L190.211 191.623L139.022 190.745L139.208 188.566Z" fill="#F1C40F"/>
                    <path className="default-yebrow" id="right-eyebrow" d="M270.296 188.566L244.973 185.374L218.111 189.113L219.291 191.624L270.483 190.745L270.296 188.566Z" fill="#F1C40F"/>
                    <ellipse id="nose" cx="205" cy="276.078" rx="13" ry="8" fill="#6C63FF"/>
                    <path id="left-ear" d="M107 66.5782C92.6 73.7782 73.6667 93.2448 66 102.078C50 89.5782 62 33.5782 59.5 31.5782C57 29.5782 125 57.5782 107 66.5782Z" fill="#F1C40F"/>
                    <path id="right-ear" d="M301.947 66.6563C316.347 73.8563 335.281 93.323 342.947 102.156C358.947 89.6563 346.947 33.6563 349.447 31.6563C351.947 29.6563 283.947 57.6563 301.947 66.6563Z" fill="#F1C40F"/>
                </g>
            </svg>
        </>
    )
}
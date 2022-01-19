import React from 'react'
import style from "./Container.module.scss"

export default function Container({className, children}) {
	return <div className={`${style.container} ${className}`}>{children}</div>
}
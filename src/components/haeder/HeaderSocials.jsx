import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiNotion} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank"><BsGithub/></a>
        <a href="http://notion.com" target="_blank"><SiNotion/></a>
    </div>
  )
}

export default HeaderSocials
import React from "react";
import './Modal.scss'
export default class Modal extends React.Component{

	render() {
		const {title, desc, closeModal}=this.props
		return(
			<div className="modal-wrapper">
				<div className="modal">
					<div className="modal-box">
						<button type="button" className="modal-close" onClick={closeModal}>
							<svg viewBox="0 0 16 16" width="16" height="16">
								<path
									d="m9.3 8 6.1-6.1c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L8 6.7 1.9.6C1.6.3 1 .3.6.6c-.3.4-.3 1 0 1.3L6.7 8 .6 14.1c-.4.4-.3.9 0 1.3l.1.1c.4.3.9.2 1.2-.1L8 9.3l6.1 6.1c.4.4.9.4 1.3 0s.4-.9 0-1.3L9.3 8z"/>
							</svg>
						</button>
						<div className="modal-header">
							<h4>{title}</h4>
						</div>
						<div className="modal-content">
							{desc===""? "Нету описания": desc}
						</div>
						<div className="modal-footer">
							<div className="button-wrapper">
								<button className="btn" type="button">OK</button>
								<button className="btn" onClick={closeModal} type="button">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


import React from 'react';
import styled from 'styled-components';

const Message: React.FC<{ message: string }> = ({ message }) => {
	if (message) return <MessageBox>{message}</MessageBox>;
	else return null;
};

const MessageBox = styled.div`
	background: salmon;
`;

export default Message;
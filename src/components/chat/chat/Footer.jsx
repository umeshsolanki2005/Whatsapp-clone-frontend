import { useEffect } from 'react';
import { EmojiEmotions, AttachFile, Mic } from '@mui/icons-material';
import { Box, styled, InputBase } from '@mui/material';
import { uploadFile } from '../../../service/api';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`;

const Footer = ({ sendText, value, setValue, setFile, file, setImage }) => {

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                try {
                    const response = await uploadFile(data);
                    if (response && response.data) {
                        setImage(response.data);
                    } else {
                        console.log('File upload failed:', response);
                    }
                } catch (error) {
                    console.error('Upload API Error:', error);
                }
            }
        };
        getImage();
    }, [file, setImage]);

    const onFileChange = (e) => {
        if (e.target.files[0]) {
            setValue(e.target.files[0].name);
            setFile(e.target.files[0]);
        }
    };

    return (
        <Container>
            <EmojiEmotions />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={onFileChange}
            />

            <Search>
                <InputField
                    placeholder="Type a message"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={sendText}
                    value={value}
                />
            </Search>
            <Mic />
        </Container>
    );
};

export default Footer;

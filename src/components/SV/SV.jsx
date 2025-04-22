import { saveAs } from "file-saver"
import { linkIMG } from '../../helper/helper';
const linkSV = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png"

export const DownloadWithFileSaver = () => {
    const handleDownload = () => {
        saveAs(linkSV, "image.png");
    };

    return (
        <div className="cv_cont_arrow">
            <div>
            <img className="img_arrow" src={linkIMG + "social/right-arrow.png"} />
            <p className="img_arrow_p">Press to download</p>
            </div>
            <div className="cv_cont" onClick={handleDownload}>
                <img
                    className='cv_img'
                    src={linkIMG + 'social/file.png'}
                    // src={linkIMG + 'SV_USERLASTNAME_USERNAME.pdf'}
                    alt="Скачать файл"
                />
            </div>
        </div>
    );
};
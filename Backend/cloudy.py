# cloudinary.py

import cloudinary
import cloudinary.uploader
cloudinary_config = {
    "cloud_name": "dw25lwpb4",
    "api_key": "418441418876288",
    "api_secret": "ZRFDI0w4MOjMER9aM5xEBpERs-4"
}

def upload_image_to_cloudinary(file):
    upload_result = cloudinary.uploader.upload(
        file,
        **cloudinary_config
    )
    return upload_result["secure_url"]

import { useNavigate } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiArrowLeftBoldCircle } from '@mdi/js';

function BackIcon() {
    const navigate = useNavigate();

    return (
        <Icon
                    path={mdiArrowLeftBoldCircle}
                    size={2}
                    className="absolute left-4 top-28 cursor-pointer hover:text-gray-800"
                    onClick={() => navigate(-1)}
                />
    )
}

export default BackIcon

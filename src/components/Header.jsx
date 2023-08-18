import React from 'react';
import { BoltIcon} from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='bg-gray-100 flex items-center justify-between'>
            {/* logo section */}
            <div>
                <BoltIcon />
                <span>Let's Read</span>
            </div>


           {/* nav items */}
        </div>
    );
};

export default Header;
import * as React from "react";

function SectionHeading({children, className = ''}) {
    return (
        <h2 className="text-4xl font-bold text-center text-orange-400 swing-in-top-fwd mb-6">
            {children}
        </h2>
    );
}

export default SectionHeading;
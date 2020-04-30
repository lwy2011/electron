const make_class = (init: string) => {
    return (...strs: (string | undefined)[]) => {
        const other = strs.filter(Boolean).join("-");
        return "yr-" + init + (
            other ? "-" + other : ""
        );
    };
};

export default make_class;
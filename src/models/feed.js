export default [
    {
        line: 1,
        name: "category",
        type: "select",
        label: '1:',
        placeholder: "wtf",
        required: true,
        emptyMessage: "wtf",
        options: [
            { value: "wtf" },
            { value: "wtf" },
            { value: "wtf" },
            { value: "wtf" },
            { value: "wtf" },
            { value: "wtf" },
            { value: "wtf" }
        ]
    },
    {
        line: 1,
        name: "email",
        type: "email",
        label: "2:",
        required: true,
        emptyMessage: "wtf"
    },
    {
        line: 2,
        name: "name",
        type: "text",
        label: "3:",
        required: true,
        emptyMessage: "wtf",
        validationRule: "[а-яё\\-]{2,}",
        validationMessageError: "wtf"
    },
    {
        line: 2,
        name: "subject",
        type: "text",
        label: "4:",
        required: true,
        emptyMessage: "wtf"
    },
    {
        line: 3,
        name: "loanNumber",
        type: "number",
        label: "5:",
        hint: "wtf"
    },
    {
        line: 4,
        name: "text",
        type: "textarea",
        label: "6:",
        required: true,
        emptyMessage: "wtf"
    },
    {
        line: 5,
        name: "file",
        type: "file",
        label: "7:",
        hint: "wtf",
        placeholder: "wtf",
        bottomText: "wtf"
    },
    {
        line: 6,
        name: "recaptcha",
        label: "wtf:",
        type: "recaptcha",
        required: true,
        emptyMessage: "wtf"
    }
]
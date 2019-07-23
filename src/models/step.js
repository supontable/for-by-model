export default [
    {
        step: 1,
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
        step: 1,
        line: 1,
        name: "email",
        type: "email",
        label: "2:",
        required: true,
        emptyMessage: "wtf"
    },
    {
        step: 1,
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
        step: 1,
        line: 2,
        name: "subject",
        type: "text",
        label: "4:",
        required: true,
        emptyMessage: "wtf"
    },
    {
        step: 2,
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
        step: 2,
        line: 1,
        name: "email",
        type: "email",
        label: "2:",
        required: true,
        emptyMessage: "wtf"
    },
    {
        step: 2,
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
        step: 2,
        line: 2,
        name: "subject",
        type: "text",
        label: "4:",
        required: true,
        emptyMessage: "wtf"
    },
    {
        step: 2,
        line: 3,
        name: "loanNumber",
        type: "number",
        label: "5:",
        hint: "wtf"
    },
    {
        step: 2,
        line: 4,
        name: "text",
        type: "textarea",
        label: "6:",
        required: true,
        emptyMessage: "wtf"
    },
    {
        step: 2,
        line: 5,
        name: "file",
        type: "file",
        label: "7:",
        hint: "wtf",
        placeholder: "wtf",
        bottomText: "wtf"
    },
    {
        step: 2,
        line: 6,
        name: "recaptcha",
        label: "wtf:",
        type: "recaptcha",
        required: true,
        emptyMessage: "wtf"
    }
]
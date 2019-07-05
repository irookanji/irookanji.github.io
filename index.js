(function() {
    const MAIL = 'irookanji@gmail.com';

    const form = document.querySelector('.sendForm');
    const formSubject = form.querySelector('.sendForm_subject');
    const formSubjectEmail = form.querySelector('.sendForm_email');
    const formMessage = form.querySelector('.sendForm_message');
    const submitButton = form.querySelector('.sendForm_submitButton');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (formSubject.validity.valid && formSubjectEmail.validity.valid && formMessage.validity.valid) {
            const mailSubject = `${formSubject.value} (${formSubjectEmail.value})`;
            const mailString = `mailto:${MAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(formMessage.value)}`;
            form.setAttribute('action', mailString);
            form.submit();
        }
    });
}());

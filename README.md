# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# mmit-webapp-vite

# Docs for package used to  design the scheduler
- [Link to lIbrary Docs](https://jquense.github.io/react-big-calendar/examples/index.html?path=/docs/examples--example-1) 


``` javaScript

   const schema = yup.object().shape({
        years_of_experience: yup.number().typeError('Years of experience should be a number').min(1, 'Years of experience should be at least 1').required('Years of experience is required'),
        tools: yup.string().email('Invalid email').required('Email is required'),
        company: yup.string().email('Invalid email').required('Email is required'),
        role: yup.string().email('Invalid email').required('Email is required'),
        linked_in_url: yup.string().email('Invalid email').required('Email is required'),
        twitter_url: yup.string().email('Invalid email').required('Email is required'),
        portfolio_url: yup.string().email('Invalid email').required('Email is required'),
    });
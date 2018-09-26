
module.exports = {
    entry: './public/MainApp.js',
    output: {
        path: __dirname,
        filename: 'public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Login: 'public/components/Login.js',
            Register: 'public/components/Register.js',
            ContactUs: 'public/components/ContactUs.js',
            LandingPage: 'public/components/LandingPage.js',
            NavBar: 'public/components/NavBar.js',
            WeatherMain: 'public/components/WeatherMain.js',
            WeatherForm: 'public/components/WeatherForm.js',
            WeatherMessage: 'public/components/WeatherMessage.js',
            Api: 'public/api/weatherapi.js',
        },
        extensions: ['','.js']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react' ,'es2015']
                },
                test: /\.js?$/,
                exclude: /(node_modules)/
            }
        ]
    }
}
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:snippet_coder_utils/FormHelper.dart';
import 'package:snippet_coder_utils/ProgressHUD.dart';
import 'package:snippet_coder_utils/hex_color.dart';
import 'package:tc_gen_mobile/config.dart';
import 'package:tc_gen_mobile/main.dart';
import 'package:tc_gen_mobile/models/register_request_model.dart';
import 'package:tc_gen_mobile/services/api_service.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  bool isAPIcallProcess = false;
  bool hidePassword = true;

  // Maintain state of the form
  static final GlobalKey<FormState> globalKey = GlobalKey<FormState>();
  String? email;
  String? password;
  String? username;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          backgroundColor: HexColor("#ffffff"),
          body: ProgressHUD(
            child: Form(
              key: globalKey,
              child: _registerUi(context),
            ),
            inAsyncCall: isAPIcallProcess,
            opacity: 0.3,
            key: UniqueKey(),
          )),
    );
  }

  Widget _registerUi(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.height / 4,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [HexColor("#E0CCE4"), HexColor("#E0CCE4")],
                ),
                borderRadius: const BorderRadius.only(
                  bottomLeft: Radius.circular(80),
                  bottomRight: Radius.circular(80),
                ),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Align(
                    alignment: Alignment.center,
                    child: Image.asset("assets/images/tcLogo.png",
                        width: 200, height: 100, fit: BoxFit.contain),
                  )
                ],
              ),
            ),
            const Padding(
              padding: EdgeInsets.only(
                left: 20,
                top: 50,
                bottom: 30,
              ),
              child: Text(
                'Sign up',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 25,
                    color: Colors.black),
              ),
            ),
            FormHelper.inputFieldWidget(
              context,
              "Username",
              "Username",
              (onValidateVal) {
                if (onValidateVal.isEmpty) {
                  return "First name can\'t be empty.";
                }
                return null;
              },
              (onSavedVal) {
                username = onSavedVal;
              },
              borderFocusColor: Color.fromRGBO(102, 0, 119, 0.5),
              prefixIconColor: Color.fromRGBO(102, 0, 119, 0.7),
              borderColor: Color.fromRGBO(223, 223, 223, 1),
              textColor: Color.fromRGBO(58, 59, 59, 1),
              hintColor: Color.fromRGBO(102, 0, 119, 0.7),
              borderRadius: 10,
              suffixIcon: IconButton(
                onPressed: () {},
                color: Color.fromRGBO(102, 0, 119, 0.7),
                icon: const Icon(Icons.person),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 20),
              child: FormHelper.inputFieldWidget(
                context,
                "Email",
                "Email",
                (onValidateVal) {
                  if (onValidateVal.isEmpty) {
                    return "Email can\'t be empty.";
                  }
                  return null;
                },
                (onSavedVal) {
                  email = onSavedVal;
                },
                borderFocusColor: Color.fromRGBO(102, 0, 119, 0.5),
                prefixIconColor: Color.fromRGBO(102, 0, 119, 0.7),
                borderColor: Color.fromRGBO(223, 223, 223, 1),
                textColor: Color.fromRGBO(58, 59, 59, 1),
                hintColor: Color.fromRGBO(102, 0, 119, 0.7),
                borderRadius: 10,
                suffixIcon: IconButton(
                  onPressed: () {},
                  color: Color.fromRGBO(102, 0, 119, 0.7),
                  icon: Icon(Icons.email),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 20),
              child: FormHelper.inputFieldWidget(
                context,
                "password",
                "password",
                (onValidateVal) {
                  if (onValidateVal.isEmpty) {
                    return "Password can\'t be empty.";
                  }
                  return null;
                },
                (onSavedVal) {
                  password = onSavedVal;
                },
                borderFocusColor: Color.fromRGBO(102, 0, 119, 0.5),
                prefixIconColor: Color.fromRGBO(102, 0, 119, 0.7),
                borderColor: Color.fromRGBO(223, 223, 223, 1),
                textColor: Color.fromRGBO(58, 59, 59, 1),
                hintColor: Color.fromRGBO(102, 0, 119, 0.7),
                borderRadius: 10,
                obscureText: hidePassword,
                suffixIcon: IconButton(
                  onPressed: () {
                    setState(() {
                      hidePassword = !hidePassword;
                    });
                  },
                  color: Color.fromRGBO(102, 0, 119, 0.7),
                  icon: Icon(
                    hidePassword ? Icons.visibility_off : Icons.visibility,
                  ),
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomRight,
              child: Padding(
                padding: const EdgeInsets.only(right: 20, top: 10),
                child: RichText(
                  text: TextSpan(
                    style: const TextStyle(
                      color: Colors.grey,
                      fontSize: 14.0,
                    ),
                    children: <TextSpan>[],
                  ),
                ),
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Center(
              child: FormHelper.submitButton(
                "Sign up",
                () {
                  if (validateAndSave()) {
                    setState(() {
                      isAPIcallProcess = true;
                    });

                    RegisterRequestModel model = RegisterRequestModel(
                        username: username!,
                        email: email!,
                        password: password!);

                    APIService.register(model).then((response) {
                      setState(() {
                        isAPIcallProcess = false;
                      });
                      if (response != null) {
                        FormHelper.showSimpleAlertDialog(
                            context,
                            Config.appName,
                            "Registration Successful. Please login to the account",
                            "OK", () {
                          Navigator.pushNamedAndRemoveUntil(
                              context, '/login', (route) => false);
                        });
                      } else {
                        FormHelper.showSimpleAlertDialog(
                            context, Config.appName, 'response.message', "OK",
                            () {
                          Navigator.pop(context);
                        });
                      }
                    });
                  }
                },
                btnColor: HexColor("#660077"),
                borderColor: HexColor("#660077"),
                txtColor: Colors.white,
                borderRadius: 10,
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Center(
              child: Text('OR',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                    color: HexColor("#3A3B3B"),
                  )),
            ),
            SizedBox(
              height: 10.0,
            ),
            Align(
              alignment: Alignment.center,
              child: Padding(
                padding: const EdgeInsets.only(right: 20, top: 10),
                child: RichText(
                  text: TextSpan(
                    style: const TextStyle(
                      color: Colors.grey,
                      fontSize: 14.0,
                    ),
                    children: <TextSpan>[
                      const TextSpan(text: 'Already have an account?'),
                      TextSpan(
                        text: 'Login',
                        style: const TextStyle(
                          color: Color.fromRGBO(102, 0, 119, 1),
                          decoration: TextDecoration.underline,
                        ),
                        recognizer: TapGestureRecognizer()
                          ..onTap = () {
                            Navigator.pushNamed(context, "/");
                          },
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ]),
    );
  }

  bool validateAndSave() {
    final form = globalKey.currentState;
    if (form!.validate()) {
      form.save();
      return true;
    } else {
      return false;
    }
  }
}

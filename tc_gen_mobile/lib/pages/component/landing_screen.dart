import 'package:fluentui_icons/fluentui_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:snippet_coder_utils/hex_color.dart';

class LandingScreen extends StatelessWidget {
  const LandingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Container(
            child: Padding(
              padding: const EdgeInsets.only(top: 20, left: 10, right: 10),
              child: Center(
                child: Text("Please Select a generator",
                    style: TextStyle(
                        fontSize: 25,
                        fontWeight: FontWeight.bold,
                        color: Colors.black87)),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(
                top: 20.0, left: 10, right: 10, bottom: 10),
            child: Center(
              child: Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height / 4,
                decoration: const BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    bottomLeft: Radius.circular(10),
                    bottomRight: Radius.circular(10),
                  ),
                  boxShadow: [
                    BoxShadow(
                        blurRadius: 2.0,
                        color: Color.fromRGBO(102, 0, 119, 0.2))
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.only(left: 20.0, top: 20.0),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Image.asset("assets/images/tc_generate.png",
                                width: 76, height: 72, fit: BoxFit.contain),
                          )
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Generate Terms & Conditions',
                            style: TextStyle(
                                fontSize: 19.0, fontWeight: FontWeight.w700),
                          ),
                          IconButton(
                              onPressed: () {},
                              icon: Icon(FluentSystemIcons
                                  .ic_fluent_chevron_right_regular))
                        ],
                      ),
                      Row(
                        children: [
                          Text('Legal agreement between your service and user')
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(
                top: 10.0, left: 10, right: 10, bottom: 10),
            child: Center(
              child: Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height / 4,
                decoration: const BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    bottomLeft: Radius.circular(10),
                    bottomRight: Radius.circular(10),
                  ),
                  boxShadow: [
                    BoxShadow(
                        blurRadius: 2.0,
                        color: Color.fromRGBO(102, 0, 119, 0.2))
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.only(left: 20.0, top: 20.0),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Image.asset("assets/images/lock.png",
                                width: 76, height: 72, fit: BoxFit.contain),
                          )
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Generate Privacy Policy',
                            style: TextStyle(
                                fontSize: 19.0, fontWeight: FontWeight.w700),
                          ),
                          IconButton(
                              onPressed: () {},
                              icon: Icon(FluentSystemIcons
                                  .ic_fluent_chevron_right_regular))
                        ],
                      ),
                      Row(
                        children: [
                          Text(
                              'Legal protection of personal information collected')
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(
                top: 10.0, left: 10, right: 10, bottom: 10),
            child: Center(
              child: Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height / 4,
                decoration: const BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    bottomLeft: Radius.circular(10),
                    bottomRight: Radius.circular(10),
                  ),
                  boxShadow: [
                    BoxShadow(
                        blurRadius: 2.0,
                        color: Color.fromRGBO(102, 0, 119, 0.2))
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.only(left: 20.0, top: 20.0),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Image.asset(
                                "assets/images/disclaimer_generator.png",
                                width: 76,
                                height: 72,
                                fit: BoxFit.contain),
                          )
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Generate Disclaimer',
                            style: TextStyle(
                                fontSize: 19.0, fontWeight: FontWeight.w700),
                          ),
                          IconButton(
                              onPressed: () {},
                              icon: Icon(FluentSystemIcons
                                  .ic_fluent_chevron_right_regular))
                        ],
                      ),
                      Row(
                        children: [
                          Text('A statement that delimits responsibility')
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(
                top: 10.0, left: 10, right: 10, bottom: 10),
            child: Center(
              child: Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height / 4,
                decoration: const BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    bottomLeft: Radius.circular(10),
                    bottomRight: Radius.circular(10),
                  ),
                  boxShadow: [
                    BoxShadow(
                        blurRadius: 2.0,
                        color: Color.fromRGBO(102, 0, 119, 0.2))
                  ],
                ),
                child: Padding(
                  padding: const EdgeInsets.only(left: 20.0, top: 20.0),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Image.asset(
                                "assets/images/refund_generator.png",
                                width: 76,
                                height: 72,
                                fit: BoxFit.contain),
                          )
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Generate Return & Refund Policy',
                            style: TextStyle(
                                fontSize: 19.0, fontWeight: FontWeight.w700),
                          ),
                          IconButton(
                              onPressed: () {},
                              icon: Icon(FluentSystemIcons
                                  .ic_fluent_chevron_right_regular))
                        ],
                      ),
                      Row(
                        children: [
                          Text(
                              'How customers can return good/requests for a refund.')
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

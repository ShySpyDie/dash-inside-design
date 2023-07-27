import 'package:flutter/material.dart';

import 'presentation/pages/login_page.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp( title: 'Demo',
      theme: ThemeData(
        colorScheme: const ColorScheme.light(
          primary: Color.fromARGB(255, 255, 81, 12),
        ),
      ),
      home: const APage(),
    );
  
  }
}
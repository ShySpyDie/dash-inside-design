import 'package:flutter/material.dart';

class APage extends StatelessWidget {
  const APage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        margin: const EdgeInsets.all(32.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.chevron_left, size: 32.0),
                Text(
                  'Log in',
                  style: TextStyle(fontSize: 24.0),
                ),
              ],
            ),
            const Spacer(),
            Center(
              child: Column(
                children: [
                  Text(
                    'Dash Inside',
                    style: TextStyle(fontSize: 32.0),
                  ),
                  Text(
                    'Non-Profit Organization',
                    style: TextStyle(fontSize: 16.0),
                  ),
                ],
              ),
            ),
            const Spacer(),
            Center(
              child: Column(
                children: [
                  TextField(decoration: InputDecoration(label: Text('Email'))),
                  TextField(decoration: InputDecoration(label: Text('Password'))),
                ],
              ),
            ),
          
            const Spacer(),
            Column(
              children: [
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () {},
                child: const Text('Sign Up'),
              ),
            ),

const Spacer(flex: 20,),

            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () {},
                child: const Text('Log in'),
              ),
            ),
            ],
            ),
          ],
        ),
      ),
    );
  }


}
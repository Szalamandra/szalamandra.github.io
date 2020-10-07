<?php
if(isset($_POST['submit'])){
    $name=$_POST['name'];
     $emailFrom=$_POST['email'];
      $message=$_POST['message'];

        $emailem="locolobo@freemail.hu";
        $headers="From: honlapomról".$emailFrom;
        $txt="Emailt kaptál".$name."től".\n\n.$message;

      mail($emailem,$txt,$emailFrom);
      header("Location: index.html?mailsend");


}
var updateRequest = new XMLHttpRequest();
                        updateRequest.open('POST', 'update.php', true);
                        updateRequest.setRequestHeader('Content-Type', 'application/json');
                        updateRequest.onreadystatechange = function() {
                            if (updateRequest.readyState === 4 && updateRequest.status === 200) {
                         
                          window.location.href = "login.php"
                          
                            }
                        };
                        var data = {
                            username: "<?php echo $username; ?>",
                            password: "<?php echo $password; ?>",
                            email: "<?php echo $email; ?>",
                            phone: "<?php echo $phone; ?>",
                            accountNumber: accountNumber,
                            rand: rand // Use rand here
                        };
                        console.log('Data Sent to update.php:', data); // Debugging statement
                        updateRequest.send(JSON.stringify(data));